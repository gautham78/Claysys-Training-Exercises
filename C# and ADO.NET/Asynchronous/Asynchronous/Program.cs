using System;
using System.Threading.Tasks;

namespace SimpleAsync
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("Start");
            await WaitAsync();
            Console.WriteLine("End");
            Console.ReadLine();
        }

        static async Task WaitAsync()
        {
            await Task.Delay(2000); //delay used to cause lag   
        }
    }
}
