package com.sashqua.myvoter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by sashqua on 22.12.16.
 */
@SpringBootApplication
public class Application  {


    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }


}
