package net.gjeanmart.support;

import java.io.File;
import java.io.IOException;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchProviderException;

import org.web3j.crypto.CipherException;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.Web3ClientVersion;
import org.web3j.protocol.http.HttpService;

public class Application {

    public static void main(String[] args) {
	try {
	    createWallet();
	} catch (NoSuchProviderException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	} catch (InvalidAlgorithmParameterException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	} catch (IOException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	} catch (CipherException e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	} catch (Exception e) {
	    // TODO Auto-generated catch block
	    e.printStackTrace();
	}
    }
    
    public static void createWallet() throws IOException, NoSuchProviderException, CipherException, InvalidAlgorithmParameterException, Exception {
        Web3j web3 = Web3j.build(new HttpService("https://rinkeby.infura.io/XXX"));
        Web3ClientVersion web3ClientVersion = web3.web3ClientVersion().send();
        String clientVersion = web3ClientVersion.getWeb3ClientVersion();
        System.out.println(clientVersion);
        String fileName = WalletUtils.generateFullNewWalletFile(
                "trrtytry",
                new File("/home/gjeanmart//workspace/personal/stackexchange/46381-getting-classcastexception-while-creating-wallet/src/main/resources"));
        System.out.println(fileName);
    }
}
