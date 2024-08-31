using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstProject
{
    internal class Program
    {
        static void Main(string[] args)
        {    

            Console.WriteLine("Hello World");
            int num = 3000; // or float = 3E3F
            Console.WriteLine(num);
            const string iron = "I am Iron Man ";
            Console.WriteLine(iron);
            Console.WriteLine(iron + "I love you " + num);
            Console.WriteLine(4 + num);
            float anum = 10.2F;
            Console.WriteLine("Make sure to add F and D in case of Float and Double. "+ anum);

            Console.WriteLine("What is your hobby?");
            string hobby = Console.ReadLine();
            Console.WriteLine("Hobby is "+ hobby);
            int x = 20;
            int y = 18;
            if (x > y)
            {
                Console.WriteLine("x is greater than y");
            }
            Console.WriteLine();
            Console.WriteLine("Favourite Food?");
            Console.WriteLine("1.Pizza 2.Rice 3.Porotta");
            int food = Convert.ToInt32(Console.ReadLine());
            switch(food)
            {
                case 1:Console.WriteLine("Pizza is a good choice");
                break;

                case 2:Console.WriteLine("Aren't you bored of rice?");
                break;
                
                case 3:Console.WriteLine("All hailll Porottaaaaa");
                break;

            }

            int[] numArray = { 1, 2, 3, 4, 5, 6 };  
            Console.WriteLine(numArray.Max());
            Console.WriteLine();
            for( int i= 5;i>=0;i--)
            {
                if (i == 0)
                {
                    Console.WriteLine("Boooom. Sry exploded at 1");
                }
                else
                {
                    Console.WriteLine(numArray[i]);
                }
            }



            Console.ReadLine();

        }
    }


}
