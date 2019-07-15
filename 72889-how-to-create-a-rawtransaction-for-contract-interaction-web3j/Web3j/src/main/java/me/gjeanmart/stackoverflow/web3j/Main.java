package me.gjeanmart.stackoverflow.web3j;

import java.io.IOException;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;

import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Uint;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.exceptions.TransactionException;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.RawTransactionManager;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.DefaultGasProvider;
import org.web3j.tx.response.PollingTransactionReceiptProcessor;
import org.web3j.tx.response.TransactionReceiptProcessor;

public class Main {

    public static void main(String[] args) throws IOException, TransactionException {
        

        // Connect to the node
        System.out.println("Connecting to Ethereum ...");
        Web3j web3j = Web3j.build(new HttpService("http://localhost:8545"));
        System.out.println("Successfuly connected to Ethereum");

        // Load an account
        String pk = "0x......";
        Credentials credentials = Credentials.create(pk);
        
        
        
        // Contract
        String contractAddress = "0x12d8e4546CD10e282083344CD4CA2C55FC3dAbeC";
        
        // Function
        Function function = new Function("set",
                Arrays.asList(new Uint(BigInteger.valueOf(20))), 
                Collections.emptyList());

        //Encode function values in transaction data format
        String txData = FunctionEncoder.encode(function);
        
        // Build TransactionManager
        TransactionManager txManager = new RawTransactionManager(web3j, credentials);
        
        // Send transaction
        String txHash = txManager.sendTransaction(DefaultGasProvider.GAS_PRICE, DefaultGasProvider.GAS_LIMIT, contractAddress, txData, BigInteger.ZERO).getTransactionHash();
        
        // Wait for transaction to be mined
        TransactionReceiptProcessor receiptProcessor = new PollingTransactionReceiptProcessor(web3j, TransactionManager.DEFAULT_POLLING_FREQUENCY, TransactionManager.DEFAULT_POLLING_ATTEMPTS_PER_TX_HASH);
        TransactionReceipt txReceipt = receiptProcessor.waitForTransactionReceipt(txHash);

    }

}
