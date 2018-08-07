package com.gjeanmart.example.springbootrequestbody;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class MyEntity {

    @NotNull
    private String field1;
    @Min(0) @Max(9)
    private int field2;
    
}
