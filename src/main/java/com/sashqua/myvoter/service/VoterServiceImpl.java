package com.sashqua.myvoter.service;

import com.sashqua.myvoter.entity.Voter;
import com.sashqua.myvoter.repository.VoterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sashqua on 22.12.16.
 */

@Service("voterService")
@Validated
public class VoterServiceImpl implements VoterService {

    @Autowired
    private final VoterRepository repository;

    @Inject
    public VoterServiceImpl(final VoterRepository repository) {
        this.repository = repository;
    }


    @Override
    @Transactional
    public Voter save(@NotNull @Valid final Voter voter) {
        return repository.save(voter);
    }

    @Override
    @Transactional
    public Voter getVoter(Integer id) {
        Voter existing = repository.findOne(id);
        return existing;
    }

    @Override
    @Transactional
    public List<Voter> findAll() {
        List<Voter>  voters= new ArrayList<>();
        voters = repository.findAll();
        return voters;
    }

    @Override
    @Transactional
    public void addVote(Integer id) {
        repository.addVote(id);
    }

    @Override
    @Transactional
    public void closeVoter(Integer id) {
        repository.closeVoter(id);
    }


}
