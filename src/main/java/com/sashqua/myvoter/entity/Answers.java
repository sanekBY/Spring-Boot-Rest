package com.sashqua.myvoter.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by sashqua on 22.12.16.
 */
@Entity
@Table(name = "answers")
public class Answers {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="seq_answers")
    @SequenceGenerator(name="seq_answers", sequenceName="seq_answers", allocationSize=1)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "voter_id")
    private Voter voterId;

    @Column(name = "answer")
    private String answer;

    @Column(name = "votes")
    private Integer votes;



    public Answers() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Voter getVoterId() {
        return voterId;
    }

    public void setVoterId(Voter voterId) {
        this.voterId = voterId;
    }

    public Integer getVotes() {
        return votes;
    }

    public void setVotes(Integer votes) {
        this.votes = votes;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
