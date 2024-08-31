using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classProject
{

    class Drink
    {
        public string cup = "Coffee";
        public virtual void eat()
        {

            Console.WriteLine("Creme Brule");
        }
    }

    class Food : Drink
    {

        public override void eat()
        {
            Console.WriteLine("Pancake");
        }

    }

    class Lunch : Food  
    {
        public override void eat()
        {
            Console.WriteLine("It should be a good lunch");
        }
    }


    class Myclass
    {   
        static void newMethod(string name) {

            Console.WriteLine("I am " + name + " not Gautham");
            
        
        }

        string colour = "pink";
        int luckyNumber;
        static void Main(string[] args)
        {
            newMethod("Batman");
            Myclass ob = new Myclass();
            Console.WriteLine(ob.colour);

            ob.luckyNumber = 15;//useful when creating multiple objects of one class:
            Console.WriteLine(ob.luckyNumber);

            Console.WriteLine();

            Food foodob = new Food();
            foodob.eat();
            Console.WriteLine();
            Console.WriteLine("Polymorphism example output below");
            Drink drinkob = new Drink();
            Drink fdrinkob = new Food();
            Drink ldrinkob = new Lunch();

            drinkob.eat();
            fdrinkob.eat();


            Console.ReadLine(); 

          



        }
    }

    
}
