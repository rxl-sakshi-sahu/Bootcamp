package Basics.src;

public class Test {
    public static void main(String[] args){

        World world = new World();
        // world.start();
        Thread t1 = new Thread(world);
        t1.start();
        
        for(int i=0;i<5;i++){
            System.out.println("Hello");
           }
    }
}
