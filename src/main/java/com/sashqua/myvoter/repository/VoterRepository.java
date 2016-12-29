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

    @Modifying
    @Query("UPDATE Answers a SET a.votes = a.votes+1 where a.id = ?1")
    void addVote(Integer id);

    @Modifying
    @Query("UPDATE Voter v SET v.isclosed = 'true' where v.id = ?1")
    void closeVoter(Integer id);

}
