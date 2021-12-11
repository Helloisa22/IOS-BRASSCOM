public class Hellen{
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        int auxilar = 1;
        int num = 0;

        System.out.print("Informe um número: ");
        num = entrada.nextInt();

        while (auxilar <= num) {
            System.out.print(auxilar + ", ");
            auxilar += auxilar;
        }
        entrada.close();
    }
}

