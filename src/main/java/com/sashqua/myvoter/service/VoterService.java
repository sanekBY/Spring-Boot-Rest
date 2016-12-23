package com.sashqua.myvoter.service;

import com.sashqua.myvoter.entity.Voter;

import java.util.List;

/**
 * Created by sashqua on 22.12.16.
 */

public interface VoterService {
    Voter save(Voter voter);
    Voter getVoter(Integer id);
    List<Voter> findAll();
}
