package com.sashqua.myvoter.repository;

import com.sashqua.myvoter.entity.Voter;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by sashqua on 22.12.16.
 */
public interface VoterRepository extends JpaRepository<Voter, Integer> {

}
