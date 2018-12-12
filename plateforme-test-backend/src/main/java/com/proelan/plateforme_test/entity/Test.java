package com.proelan.plateforme_test.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "test")
@JsonIdentityInfo(
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "id")
public class Test {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "nom", nullable = false)
	private String nom;
	
	@Column(name = "duree")
	private Integer duree;
	
	@Column(name = "date_creation")
	private LocalDateTime dateCreation;
	
	@Column(name = "date_modification")
	private LocalDateTime dateModification;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "test")
	private List<Question> questions;
	
	public Test() {
		
	}
	
	public Test(String nom, Integer duree, LocalDateTime dateCreation, LocalDateTime dateModification, List<Question> questions) {
		this.nom = nom;
		this.duree = duree;
		this.dateCreation = dateCreation;
		this.dateModification = dateModification;
		this.questions = questions;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the nom
	 */
	public String getNom() {
		return nom;
	}

	/**
	 * @param nom the nom to set
	 */
	public void setNom(String nom) {
		this.nom = nom;
	}

	/**
	 * @return the duree
	 */
	public Integer getDuree() {
		return duree;
	}

	/**
	 * @param duree the duree to set
	 */
	public void setDuree(Integer duree) {
		this.duree = duree;
	}

	/**
	 * @return the dateCreation
	 */
	public LocalDateTime getDateCreation() {
		return dateCreation;
	}

	/**
	 * @param dateCreation the dateCreation to set
	 */
	public void setDateCreation(LocalDateTime dateCreation) {
		this.dateCreation = dateCreation;
	}

	/**
	 * @return the dateModification
	 */
	public LocalDateTime getDateModification() {
		return dateModification;
	}

	/**
	 * @param dateModification the dateModification to set
	 */
	public void setDateModification(LocalDateTime dateModification) {
		this.dateModification = dateModification;
	}

	/**
	 * @return the questions
	 */
	public List<Question> getQuestions() {
		return questions;
	}

	/**
	 * @param questions the questions to set
	 */
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	@Override
	public String toString() {
		return "Test {\n id = " + id + ",\n nom = " + nom + ",\n duree = " + duree + ",\n date creation = " + dateCreation + ",\n date modification = " + dateModification + ",\n nombre de questions = " + questions.size() + "}";
	}
	
}
