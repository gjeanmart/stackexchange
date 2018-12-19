package io.gjeanmart.stackexchange.web3j.test;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.util.List;
import java.util.Objects;

import org.junit.Test;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.EthBlock;
import org.web3j.protocol.core.methods.response.EthBlock.TransactionResult;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.websocket.WebSocketService;
import org.web3j.tx.RawTransactionManager;
import org.web3j.tx.Transfer;

import lombok.extern.slf4j.Slf4j;
import rx.Subscription;

@Slf4j
public class TestCreateWallet {

	@Test
	public void createWallet() throws NoSuchAlgorithmException, NoSuchProviderException,
			InvalidAlgorithmParameterException, CipherException, IOException {

		String folder = "/tmp/wallet/";
		String password = "secr3t";

		File folderFile = new File(folder);
		folderFile.mkdirs();

		String walletFileName = WalletUtils.generateFullNewWalletFile(password, folderFile);
		log.info("Wallet generated: " + walletFileName);

		
	}


	@Test
	public void convertHexStringIntoAsciiString() {
		String hexString = "0x68656c6c6f";
		
		if(hexString.startsWith("0x")) hexString = hexString.substring(2);
		
		byte[] byteArray = new BigInteger(hexString, 16).toByteArray();
		String asciiString = new String(byteArray);
		
		log.info(hexString+"="+asciiString);

		
	}

	@Test
	public void sendTransaction() throws IOException, InterruptedException {
		
		
		String privateKey = "????";
		String message = "hello";
		
		// Message to hex
		String messageHex = ASCIItoHEX(message);
		log.info("message in hex={}", messageHex);
		
		// Connection
		Web3j web3j = connect("wss://rinkeby.infura.io/_ws");
		
		// Wallet
		Credentials credentials = Credentials.create(privateKey);
		
		// Transaction
		RawTransactionManager rawTransactionManager =  new RawTransactionManager(web3j, credentials, 4, 1000 * 15);
		EthSendTransaction send = rawTransactionManager.sendTransaction(BigInteger.valueOf(1000000000000L), BigInteger.valueOf(100000L), "0xDD6325C45aE6fAbD028D19fa1539663Df14813a8", messageHex, BigInteger.valueOf(1));
		String hash = send.getTransactionHash();
        log.info("transaction hash:"+hash);
		
		
		Subscription subscriptionToBlocks = web3j.blockObservable(true).subscribe(block -> {
	        List<TransactionResult> transactions = block.getBlock().getTransactions();
	        if(transactions.size() > 0){
	            transactions.forEach(tx -> {
	                  EthBlock.TransactionObject transaction = (EthBlock.TransactionObject) tx.get();
	                  log.info("transaction hash:"+transaction.getHash());
	                  log.info("transaction data:"+transaction.getInput());
	                  log.info("#######");
	        });
	        }
		});
		
		Thread.sleep(60000);
		
		
	}
	
	
	
	
	
	
    private Web3j connect(String url) throws IOException {
        Objects.requireNonNull(url, "ethereum url cannot be null");
        
        log.info("Connecting to Ethereum node {}...",url);
        Web3j web3j;
        
        //////// WEBSOCKET ///////////////////////////////////
        if(url.startsWith("ws")) { 
            log.debug("WebSocket mode");
            WebSocketService web3jService = new WebSocketService(url, true);
            web3jService.connect();
            web3j = Web3j.build(web3jService);
            
        //////// HTTP ///////////////////////////////////
        } else { 
            log.info("HTTP mode");
            web3j = Web3j.build(new HttpService(url));
        }

        if(log.isDebugEnabled()) {
            String clientVersion = web3j.web3ClientVersion().send().getWeb3ClientVersion();
            log.info("Connected to Ethereum node {} : {}", url, clientVersion);
        }
        
        return web3j;
    } 
	
    public static String ASCIItoHEX(String ascii)  { 
        // Initialize final String 
        String hex = ""; 
  
        // Make a loop to iterate through 
        // every character of ascii string 
        for (int i = 0; i < ascii.length(); i++) { 
  
            // take a char from 
            // position i of string 
            char ch = ascii.charAt(i); 
  
            // cast char to integer and 
            // find its ascii value 
            int in = (int)ch; 
  
            // change this ascii value 
            // integer to hexadecimal value 
            String part = Integer.toHexString(in); 
  
            // add this hexadecimal value 
            // to final string. 
            hex += part; 
        } 
        // return the final string hex 
        return hex; 
    } 
    

	
}
