package com.proelan.plateforme_test.configuration;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

import com.proelan.plateforme_test.entity.Question;
import com.proelan.plateforme_test.entity.Reponse;
import com.proelan.plateforme_test.entity.Test;

public class HibernateUtil {

	private static final SessionFactory sessionFactory = buildSessionFactory();
	
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
	
    public static void closeSessionFactory() {
        getSessionFactory().close();
    }
    
    private static SessionFactory buildSessionFactory() throws ExceptionInInitializerError{
    	try {
	        Configuration configuration = new Configuration().configure()
	        		.addAnnotatedClass(Test.class)
	        		.addAnnotatedClass(Question.class)
	        		.addAnnotatedClass(Reponse.class);
	        StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder()
	                .applySettings(configuration.getProperties());
	        return configuration.buildSessionFactory(builder.build());
    	} catch (Throwable ex) {
            System.err.println("Initial SessionFactory creation failed : " + ex);
            throw new ExceptionInInitializerError(ex);
    	}

    }
	
}
