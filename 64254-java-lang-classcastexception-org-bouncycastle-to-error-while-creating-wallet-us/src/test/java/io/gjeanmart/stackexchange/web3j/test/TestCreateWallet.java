	package io.gjeanmart.stackexchange.web3j.test;
	
	import java.io.File;
	import java.io.IOException;
	import java.security.InvalidAlgorithmParameterException;
	import java.security.NoSuchAlgorithmException;
	import java.security.NoSuchProviderException;
	
	import org.junit.Test;
	import org.web3j.crypto.CipherException;
	import org.web3j.crypto.WalletUtils;
	
	public class TestCreateWallet {
	
		@Test
		public void createWallet() throws NoSuchAlgorithmException, NoSuchProviderException, InvalidAlgorithmParameterException, CipherException, IOException {
			
			String folder = "/tmp/wallet/";
			String password = "secr3t";
			
			File folderFile = new File(folder);
			folderFile.mkdirs();
			
			String walletFileName = WalletUtils.generateFullNewWalletFile(password, folderFile);
			System.out.println("Wallet generated: " + walletFileName);
		}
		
	}
