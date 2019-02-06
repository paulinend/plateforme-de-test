package com.proelan.plateforme_test.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proelan.plateforme_test.entity.Reponse;

@Repository
public interface ReponseRepository extends JpaRepository<Reponse, Integer> {

	List<Reponse> findAll();
}
