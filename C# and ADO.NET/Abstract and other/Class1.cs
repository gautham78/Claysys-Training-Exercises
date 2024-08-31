using System;

namespace DelegateExample
{
    public delegate void MyDelegate(string message);

    class Program
    {
        static void Main(string[] args)
        {
            MyDelegate del = PrintMessage; // this del is of datatype Mydelegate.
            del("Hello, World!");
        }

        static void PrintMessage(string message)
        {
            Console.WriteLine(message);
            Console.ReadLine();
        }
    }
}
