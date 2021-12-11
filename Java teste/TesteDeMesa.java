	public class Teste {  
    public static void main(String[] args) {  
        int controle, acumulador = 0;  
        boolean condicao;  
        System.out.println("Numero da iteração\tCondição\tControle\tAcumulador");  
        for(controle = 1; controle <= 10; controle++){  
            acumulador += controle;  
            condicao = controle <= 10;  
            System.out.println("Iteração "+ controle+ "\t\t\t"+ condicao + "\t\t\t" + controle + "\t\t\t" + acumulador);  
	        }  
	    } // fim do método main  
	}  



public class Teste2 {  
    public static void main(String[] args) {  
        int controle = 10;  
        long acumulador = 1;  
        boolean condicao;  
        System.out.println("Numero da iteração\tCondição\tControle\tAcumulador");  
        while(controle > 0){  
            int iteracao = 10 - controle + 1;  
            acumulador *= controle;  
	            condicao = controle > 0;  
	            System.out.println("Iteração "+ iteracao+ "\t\t\t"+ condicao + "\t\t\t" + controle + "\t\t\t" + acumulador);  
	            controle--;  
	        }  
	    } // fim do método main  
        


public class Teste3 {  
    public static void main(String[] args) {  
        int controle = 1;  
        long acumulador = 100;  
        boolean condicao;  
        System.out.println("Numero da iteração\tCondição\tControle\tAcumulador");  
        do{  
            acumulador -= controle;  
            condicao = controle <=10;  
	            System.out.println("Iteração "+ controle+ "\t\t\t"+ condicao + "\t\t\t" + controle + "\t\t\t" + acumulador);  
	            controle++;  
	        }while(controle <=10);  
	    } // fim do método main  
	}  
            