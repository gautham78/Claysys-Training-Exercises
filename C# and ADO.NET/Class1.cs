using System;

public abstract class Shape
{
    public abstract int CalculateArea();

    public void DisplayArea()
    {
        Console.WriteLine($"The area is: {CalculateArea()}");
    }
}

public class Rectangle : Shape
{
    private int width;
    private int height;

    public Rectangle(int width, int height)
    {
        this.width = width;
        this.height = height;
    }

    public override int CalculateArea()
    {
        return width * height;
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Shape myRectangle = new Rectangle(5, 7);
        myRectangle.DisplayArea();
    }
}
