package com.proelan.plateforme_test.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "question")
public class Question {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "test_id", nullable = false)
	@JsonBackReference
	private Test test;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "question")
	@JsonManagedReference
	private Set<Reponse> reponses;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "type_question", nullable = false)
	private TypeQuestion typeQuestion;
	
	public static enum TypeQuestion {
		CHOIX_UNIQUE("Choix Unique"),
		CHOIX_MULTIPLE("Choix Multiple"),
		REPONSE_LIBRE("Réponse Libre");
		
		private String typeQuestion;
		
		private TypeQuestion(String typeQuestion) {
			this.typeQuestion = typeQuestion;
		}
		
		public String getTypeQuestion() {
			return this.typeQuestion;
		}
	}
	
	
	@Column(name = "enonce", nullable = false)
	private String enonce;
	
	@Column(name = "nb_point")
	private Integer nbPoints;
	
	public Question() {
		
	}

	public Question(Test test, Set<Reponse> reponses, TypeQuestion typeQuestion, String enonce, Integer nbPoints) {
		this.test = test;
		this.reponses = reponses;
		this.typeQuestion = typeQuestion;
		this.enonce = enonce;
		this.nbPoints = nbPoints;
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
	 * @return the test
	 */
	public Test getTest() {
		return test;
	}

	/**
	 * @param test the test to set
	 */
	public void setTest(Test test) {
		this.test = test;
	}

	/**
	 * @return the reponses
	 */
	public Set<Reponse> getReponses() {
		return reponses;
	}

	/**
	 * @param reponses the reponses to set
	 */
	public void setReponses(Set<Reponse> reponses) {
		this.reponses = reponses;
	}

	/**
	 * @return the typeQuestion
	 */
	public TypeQuestion getTypeQuestion() {
		return typeQuestion;
	}

	/**
	 * @param typeQuestion the typeQuestion to set
	 */
	public void setTypeQuestion(TypeQuestion typeQuestion) {
		this.typeQuestion = typeQuestion;
	}

	/**
	 * @return the enonce
	 */
	public String getEnonce() {
		return enonce;
	}

	/**
	 * @param enonce the enonce to set
	 */
	public void setEnonce(String enonce) {
		this.enonce = enonce;
	}

	/**
	 * @return the nbPoints
	 */
	public Integer getNbPoints() {
		return nbPoints;
	}

	/**
	 * @param nbPoints the nbPoints to set
	 */
	public void setNbPoints(Integer nbPoints) {
		this.nbPoints = nbPoints;
	}
	
	@Override
	public String toString() {
		return "Question {\n id = " + id + ",\n test = " + test.getId() + ",\n typeQuestion = " + typeQuestion + ",\n enonce = " + enonce + ",\n nbPoints = " + nbPoints + ",\n nombre de reponses = " + reponses.size() + "}";
	}
	
}
