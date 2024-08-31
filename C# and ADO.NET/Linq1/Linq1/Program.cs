using System;
using System.Collections.Generic;
using System.Linq;

namespace Linqex
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

            var evenNumbers = from number in numbers
                              where number % 2 == 0
                              select number;

            //var evenNumbers = numbers.Where(number => number % 2 == 0); lamba exprewsssion


            foreach (int num in evenNumbers)
            {
                Console.WriteLine(num);
                Console.ReadLine();
            }
        }
    }
}
