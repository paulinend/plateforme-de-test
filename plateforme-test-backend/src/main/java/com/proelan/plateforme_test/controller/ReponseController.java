package com.proelan.plateforme_test.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.proelan.plateforme_test.entity.Question;
import com.proelan.plateforme_test.entity.Reponse;
import com.proelan.plateforme_test.repository.QuestionRepository;
import com.proelan.plateforme_test.repository.ReponseRepository;
import com.proelan.plateforme_test.repository.TestRepository;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class ReponseController {

	@Autowired
	TestRepository testRepo;
	
	@Autowired
	QuestionRepository questionRepo;
	
	@Autowired
	ReponseRepository reponseRepo;
	
	@GetMapping(value = "/nbReponses")
	public long getNbReponses() {
		return reponseRepo.count();
	}
	
	@GetMapping(value = "/reponses")
	public List<Reponse> getReponses() {
		return reponseRepo.findAll();
	}
	
	@GetMapping(value = "/reponse/{idReponse}")
	public Reponse getReponse(@PathVariable int idReponse) {
		Optional<Reponse> reponse = reponseRepo.findById(idReponse);
		return reponse.isPresent() ? reponse.get() : null;
	}
	
	@GetMapping(value = "test/{idTest}/question/{idQuestion}/reponse/liste")
	public List<Reponse> getReponsesFromQuestion(@PathVariable int idTest, @PathVariable int idQuestion) {
		Optional<Question> question = questionRepo.findById(idQuestion);
		return question.isPresent() ? question.get().getReponses() : null;
	}
	
	@PostMapping(value = "test/{idTest}/question/{idQuestion}/reponse")
	public ResponseEntity<Void> addReponse(@PathVariable int idTest, @PathVariable int idQuestion, @RequestBody Reponse reponse) {
		Optional<Question> question = questionRepo.findById(idQuestion);
		
		if (!question.isPresent()) {
			return ResponseEntity.noContent().build();
		}
		
		reponse.setQuestion(question.get());
		Reponse reponseSaved = reponseRepo.save(reponse);
		
        if (reponseSaved == null) {
            return ResponseEntity.noContent().build();
        }

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{idReponse}")
                .buildAndExpand(reponseSaved.getId())
                .toUri();

        return ResponseEntity.created(location).build();
	}
	
	@PutMapping(value = "/test/{idTest}/question/{idQuestion}/reponse/{idReponse}")
	public void updateReponse(@PathVariable int idTest, @PathVariable int idQuestion, @PathVariable int idReponse, @RequestBody Reponse reponse) {
		Optional<Reponse> optionalReponse = reponseRepo.findById(idReponse);
		Reponse reponseDB = optionalReponse.isPresent() ? optionalReponse.get() : null;
		reponseDB.setIntitule(reponse.getIntitule());
		reponseDB.setCorrect(reponse.isCorrect());
		reponseRepo.save(reponseDB);
	}
	
	@DeleteMapping(value = "/test/{idTest}/question/{idQuestion}/reponse/{idReponse}")
	public void deleteReponse(@PathVariable int idTest, @PathVariable int idQuestion, @PathVariable int idReponse) {
		Optional<Question> question = questionRepo.findById(idQuestion);
		Optional<Reponse> reponse = reponseRepo.findById(idReponse);
		
		if (!question.isPresent() || !reponse.isPresent()) {
			System.out.println("Can't delete Reponse #id : " + idReponse);
		} else {
			question.get().getReponses().remove(reponse.get());
			questionRepo.save(question.get());
			reponseRepo.delete(reponse.get());
		}
	}

}
