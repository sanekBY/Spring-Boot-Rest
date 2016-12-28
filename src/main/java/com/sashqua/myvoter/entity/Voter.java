package com.sashqua.myvoter.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.context.annotation.Primary;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.security.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * Created by sashqua on 22.12.16.
 */
@Entity
@Table(name = "voter")
public class Voter {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="seq_voter")
    @SequenceGenerator(name="seq_voter", sequenceName="seq_voter", allocationSize=1)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;

    @Column(name = "question")
    private String question;

    @Column(name = "start_date")
    private Date start_date;

    @Column(name = "close_date")
    private Date close_date;

    @Column(name = "isclosed")
    private Boolean isclosed;

    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "voterId")
    private Set<Answers> answerses;


    public Voter() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Boolean getIsclosed() {
        return isclosed;
    }

    public void setIsclosed(Boolean isclosed) {
        this.isclosed = isclosed;
    }

    public Date getClose_date() {
        return close_date;
    }

    public void setClose_date(Date close_date) {
        this.close_date = close_date;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Set<Answers> getAnswerses() {
        return answerses;
    }

    public void setAnswerses(Set<Answers> answerses) {
        this.answerses = answerses;
    }
}
