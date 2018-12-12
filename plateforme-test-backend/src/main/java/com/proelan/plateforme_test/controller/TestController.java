package com.proelan.plateforme_test.controller;

import java.net.URI;
import java.time.LocalDateTime;
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

import com.proelan.plateforme_test.entity.Test;
import com.proelan.plateforme_test.repository.TestRepository;

@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class TestController {

	@Autowired
	TestRepository testRepo;
	
	@GetMapping(value = "/nbTests")
	public long getNbTests() {
		return testRepo.count();
	}
	
	@GetMapping(value = "/test/liste")
	public List<Test> getTests() {
		return testRepo.findAll();
	}
	
	@GetMapping(value = "/test/{idTest}")
	public Test getTest(@PathVariable int idTest) {
		Optional<Test> test = testRepo.findById(idTest);
		return test.isPresent() ? test.get() : null;
	}
	
	@PostMapping(value = "/test")
	public ResponseEntity<Void> addTest(@RequestBody Test test) {
		test.setDateCreation(LocalDateTime.now());
		test.setDateModification(LocalDateTime.now());
		Test testSaved = testRepo.save(test);
		
        if (testSaved == null) {
            return ResponseEntity.noContent().build();
        }

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{idTest}")
                .buildAndExpand(testSaved.getId())
                .toUri();

        return ResponseEntity.created(location).build();
	}
	
	@PutMapping(value = "/test/{idTest}")
	public void updateTest(@PathVariable int idTest, @RequestBody Test test) {
		Optional<Test> optionalTest = testRepo.findById(idTest);
		Test testDB = optionalTest.isPresent() ? optionalTest.get() : null;
		testDB.setNom(test.getNom());
		testDB.setDuree(test.getDuree());
		testDB.setDateModification(LocalDateTime.now());
		testRepo.save(testDB);
	}
	
	@DeleteMapping(value = "/test/{idTest}")
	public void deleteTest(@PathVariable int idTest) {
		Optional<Test> test = testRepo.findById(idTest);
		
		if (!test.isPresent()) {
			System.out.println("Can't delete Test #id : " + idTest);
		} else {
			testRepo.delete(test.get());
		}
	}
}
