package com.sashqua.myvoter.controllers;

import com.sashqua.myvoter.entity.Greeting;
import com.sashqua.myvoter.entity.Voter;
import com.sashqua.myvoter.service.VoterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

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
//    @RequestMapping(value = "/createVoter", method = RequestMethod.POST)
//    public Voter createVote (@RequestBody @Valid final Voter voter) {
//        return voterService.save(voter);
//    }

    @RequestMapping("/voter")
    public void getVoter (@RequestParam(value = "id", defaultValue = "1") Integer id) {
        System.out.println(voterService.getVoter(1));
    }


    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(1,
                String.format(name));
    }

    @RequestMapping("/api/voter-list")
    public List<Voter> getListOfVoters() {
        List<Voter> list = new ArrayList<>();
        list = voterService.findAll();
        return list;
    }


//    @RequestMapping("/voter")
//    public Voter getVoter (@RequestParam(value = "id",required = false,
//            defaultValue = "1") Integer id) {
//        return voterService.getVoter(id);
//    }



}
