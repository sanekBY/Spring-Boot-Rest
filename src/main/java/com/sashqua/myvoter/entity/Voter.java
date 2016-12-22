package com.sashqua.myvoter.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Created by sashqua on 22.12.16.
 */
@Entity
@Table(name = "voter")
public class Voter {

    @Id
    @NotNull
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;

    @NotNull
    @Column(name = "ip", nullable = false)
    private String ip;

    public Voter() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }
}
