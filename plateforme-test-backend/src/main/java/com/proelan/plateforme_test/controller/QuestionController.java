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
import com.proelan.plateforme_test.entity.Test;
import com.proelan.plateforme_test.repository.QuestionRepository;
import com.proelan.plateforme_test.repository.TestRepository;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class QuestionController {

	@Autowired
	TestRepository testRepo;
	
	@Autowired
	QuestionRepository questionRepo;
	
	@GetMapping(value = "/nbQuestions")
	public long getNbQuestions() {
		return questionRepo.count();
	}
	
	@GetMapping(value = "/question/liste")
	public List<Question> getQuestions() {
		return questionRepo.findAll();
	}
	
	@GetMapping(value = "/question/{idQuestion}")
	public Question getQuestion(@PathVariable int idQuestion) {
		Optional<Question> question = questionRepo.findById(idQuestion);
		return question.isPresent() ? question.get() : null;
	}
	
	@GetMapping(value = "test/{idTest}/question/liste")
	public List<Question> getQuestionsFromTest(@PathVariable int idTest) {
		Optional<Test> test = testRepo.findById(idTest);
		return test.isPresent() ? test.get().getQuestions() : null;
	}
	
	@GetMapping(value = "test/{idTest}/question/{idQuestion}")
	public Question getQuestionsFromTest(@PathVariable int idTest, @PathVariable int idQuestion) {
		Optional<Question> question = questionRepo.findById(idQuestion);
		return question.isPresent() ? question.get() : null;
	}
	
	@PostMapping(value = "test/{idTest}/question")
	public ResponseEntity<Void> addQuestion(@PathVariable int idTest, @RequestBody Question question) {
		Optional<Test> test = testRepo.findById(idTest);
		if (!test.isPresent()) {
			return ResponseEntity.noContent().build();
		}

		question.setTest(test.get());
		Question questionSaved = questionRepo.save(question);
		
        if (questionSaved == null) {
            return ResponseEntity.noContent().build();
        }

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{idQuestion}")
                .buildAndExpand(questionSaved.getId())
                .toUri();

        return ResponseEntity.created(location).build();
	}
	
	@PutMapping(value = "/test/{idTest}/question/{idQuestion}")
	public void updateQuestion(@PathVariable int idTest, @PathVariable int idQuestion, @RequestBody Question question) {
		Optional<Question> optionalQuestion = questionRepo.findById(idQuestion);
		Question questionDB = optionalQuestion.isPresent() ? optionalQuestion.get() : null;
		questionDB.setEnonce(question.getEnonce());
		questionDB.setTypeQuestion(question.getTypeQuestion());
		questionDB.setNbPoints(question.getNbPoints());
		questionRepo.save(questionDB);
	}
	
	@DeleteMapping(value = "/test/{idTest}/question/{idQuestion}")
	public void deleteQuestion(@PathVariable int idTest, @PathVariable int idQuestion) {
		Optional<Test> test = testRepo.findById(idTest);
		Optional<Question> question = questionRepo.findById(idQuestion);
		
		if (!test.isPresent() || !question.isPresent()) {
			System.out.println("Can't delete question #id : " + idQuestion);
		} else {
			test.get().getQuestions().remove(question.get());
			testRepo.save(test.get());
			questionRepo.delete(question.get());
		}
		
		
	}
}
