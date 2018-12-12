package com.proelan.plateforme_test;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.proelan.plateforme_test.configuration.HibernateUtil;
import com.proelan.plateforme_test.entity.Question;
import com.proelan.plateforme_test.entity.Reponse;
import com.proelan.plateforme_test.entity.Test;
import com.proelan.plateforme_test.repository.QuestionRepository;
import com.proelan.plateforme_test.repository.ReponseRepository;
import com.proelan.plateforme_test.repository.TestRepository;

@SpringBootApplication
public class App implements CommandLineRunner {
	
	@Autowired
	TestRepository testRepo;
	
	@Autowired
	QuestionRepository questionRepo;
	
	@Autowired
	ReponseRepository reponseRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
	
	@Override
    public void run(String... args) throws Exception {
	        System.out.println( "Hello World!" );
	        demo();
    }
    
	public void demo() {
        List<Test> tests = readTests();
        for (Test test : tests) {
        	 System.out.println(test);
        }
        
        System.out.println( "*************************************************************" );
        List<Test> tests2 = testRepo.findAll();
        System.out.println("NOMBRE DE TESTS = " + tests2.size());
        
        System.out.println( "*************************************************************" );
        List<Question> questions = questionRepo.findAll();
        System.out.println("NOMBRE DE QUESTIONS = " + questions.size());
        
        System.out.println( "*************************************************************" );
        List<Reponse> reponses = reponseRepo.findAll();
        System.out.println("NOMBRE DE REPONSES = " + reponses.size());
        
        System.out.println( "*************************************************************" );
   }

	public void exampleCreation() {
      Test test = new Test("test avec question", 5, LocalDateTime.now(), LocalDateTime.now(), new ArrayList<>());
      Question question = new Question(test, new ArrayList<>(), Question.TypeQuestion.CHOIX_UNIQUE, "Ca marche ?", 2);
      Reponse reponseOui = new Reponse("oui", true, question);
      Reponse reponseNon = new Reponse("non", false, question);
      question.getReponses().add(reponseOui);
      question.getReponses().add(reponseNon);
      test.getQuestions().add(question);	        
      testRepo.save(test);
	}
	
   @SuppressWarnings("unchecked")
   public static List<Test> readTests() {
           System.out.println(" =======READ =======");
	       Session session = HibernateUtil.getSessionFactory().openSession();
	       Transaction transaction = null;
	       List<Test> tests = null;
		   try {
			   transaction = session.beginTransaction();
			   tests = session.createQuery("FROM Test").list();
			   System.out.println("Found " + tests.size() + " Tests");
			   transaction.commit();
		   } catch (HibernateException  e) {
			   if (transaction != null) {
				   transaction.rollback();
			   }
		       e.printStackTrace(); 
		   } finally {
			   HibernateUtil.closeSessionFactory();
		   }
		   return tests;
   }

    
}
