package net.consensys.gjeanmart;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;

import org.junit.Test;
import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.admin.Admin;
import org.web3j.protocol.admin.methods.response.PersonalUnlockAccount;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.ClientTransactionManager;
import org.web3j.tx.RawTransactionManager;
import org.web3j.tx.gas.ContractGasProvider;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TestCounter {

    @Test
    public void test() throws Exception {

        final String account = "0xe9a7eab8bf98b54b3128bfbe746199ae364c4c46";
        
        // Connect to the node
        Admin admin = Admin.build(new HttpService());  // defaults to http://localhost:8545/

        
        PersonalUnlockAccount personalUnlockAccount;

        ClientTransactionManager transactionManager = new ClientTransactionManager(admin, admin.ethAccounts().send().getAccounts().get(1));

        personalUnlockAccount = admin.personalUnlockAccount(admin.ethAccounts().send().getAccounts().get(1), "test").send();

        System.out.println("----------------------------");
        System.out.println("----------------------------");
        System.out.println(admin.ethAccounts().send().getAccounts());
        System.out.println("----------------------------");
        System.out.println(personalUnlockAccount.accountUnlocked());
        System.out.println("----------------------------");
        System.out.println("----------------------------");
        
        Counter contract = Counter.deploy(admin, transactionManager, BigInteger.ZERO, BigInteger.ZERO).send();
        String contractAddress = contract.getContractAddress();
        System.out.println("UserContractAddress: " + contractAddress);


    }
    
}
