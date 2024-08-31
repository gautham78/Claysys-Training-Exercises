using System;

namespace myExceptionFile
{
    class Program
    {
        static void Main(string[] args)
        {   

            try
            {
                int[] myArray = { 1, 2, 3 };
                Console.WriteLine(myArray[10]);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);//Message property, which outputs a message that describes the exception.
                
            }

            finally
            {
                Console.WriteLine("Would display even if no errors are occured");
            }

            Console.ReadLine();
        }
    }
}