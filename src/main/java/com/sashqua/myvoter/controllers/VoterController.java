package com.sashqua.myvoter.controllers;

import com.sashqua.myvoter.entity.Answers;
import com.sashqua.myvoter.entity.Voter;
import com.sashqua.myvoter.service.VoterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by sashqua on 22.12.16.
 */
@RestController
public class VoterController {

    @Autowired
    private final VoterService voterService;

    @Inject
    public VoterController(final VoterService voterService) {
        this.voterService = voterService;
    }
//
    @RequestMapping(value = "/api/voter-list", method = RequestMethod.POST)
    public Voter createVote (@RequestBody @Valid final Voter voter) {
        voter.setStart_date(new Date());
        for (Answers a : voter.getAnswerses()){
            a.setVoterId(voter);
        }
        return voterService.save(voter);
    }

    @RequestMapping(value = "/api/voter/{id}", method = {RequestMethod.GET})
    public Voter getVoter(@PathVariable("id") Integer id) {
        return voterService.getVoter(id);
    }

    @RequestMapping(value = "/api/voter/{id}", method = {RequestMethod.PUT})
    public void addVote(@PathVariable("id") Integer id) {
         voterService.addVote(id);
    }


    @RequestMapping(value = "/api/voter-list" ,  method = {RequestMethod.GET})
    public List<Voter> getListOfVoters() {
        return voterService.findAll();
    }

}
