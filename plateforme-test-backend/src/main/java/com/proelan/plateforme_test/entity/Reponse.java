package com.proelan.plateforme_test.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "reponse")
public class Reponse {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "intitule", nullable = false)
	private String intitule;
	
	@Column(name = "correct", nullable = false)
	private boolean correct;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "question_id", nullable = false)
	@JsonBackReference
	private Question question;
	
	public Reponse() {
		
	}
	
	public Reponse(String intitule, boolean correct, Question question) {
		this.intitule = intitule;
		this.correct = correct;
		this.question = question;
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
	 * @return the intitule
	 */
	public String getIntitule() {
		return intitule;
	}

	/**
	 * @param intitule the intitule to set
	 */
	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}

	/**
	 * @return the correct
	 */
	public boolean isCorrect() {
		return correct;
	}

	/**
	 * @param correct the correct to set
	 */
	public void setCorrect(boolean correct) {
		this.correct = correct;
	}

	/**
	 * @return the question
	 */
	public Question getQuestion() {
		return question;
	}

	/**
	 * @param question the question to set
	 */
	public void setQuestion(Question question) {
		this.question = question;
	}
	
	@Override
	public String toString() {
		return "Reponse {\n id = " + id + ",\n question = " + question.getId() + ",\n intitule = " + intitule + ",\n correct = " + correct + "}";
	}
	
}
