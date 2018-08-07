package com.gjeanmart.example.springbootrequestbody;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class Controller {
    
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void createEntity(@Valid @RequestBody final MyEntity myEntity) {
        //
    }
    

    @ControllerAdvice
    public class RestEndpointExceptionHandler { 
        
        @ExceptionHandler(MethodArgumentNotValidException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        public ResponseEntity<Object> handleNotFoundException(HttpServletRequest req, MethodArgumentNotValidException ex) {
          Object customException = "Validation failed";
          return new ResponseEntity<Object>(customException, HttpStatus.BAD_REQUEST);
        }
        
    }
}
