package com.sashqua.myvoter.repository;

import com.sashqua.myvoter.entity.Voter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Created by sashqua on 22.12.16.
 */
public interface VoterRepository extends JpaRepository<Voter, Integer> {
//    @Query("select u from User u where u.age = ?#{[0]}")
    @Modifying
    @Query("UPDATE Answers a SET a.votes = a.votes+100 where a.id = ?1")
//    @Query("select v FROM Answers v where v.id = ?1")
    void addVote(Integer id);
}
