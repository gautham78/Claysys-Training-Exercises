using System;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        string connectionString = "Server=LAPTOP-7IH5HMIM\\SQLEXPRESS;Database=StudentDB;";
        SqlConnection connection = new SqlConnection(connectionString);
        connection.Open();

        string sqlQuery = "select count(*) from student";
        SqlCommand command = new SqlCommand(sqlQuery, connection);
        int recordCount = (int)command.ExecuteScalar();
        Console.WriteLine("Number of students: " + recordCount);

        sqlQuery = "select * from student where student_id = @id";
        command = new SqlCommand(sqlQuery, connection);
        command.Parameters.AddWithValue("@id", 1);
        SqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Console.WriteLine(reader["student_name"].ToString());
            Console.WriteLine(reader["student_number"].ToString());
        }
        reader.Close();

        SqlTransaction transaction = connection.BeginTransaction();
        command.Transaction = transaction;

        try
        {
            command.CommandText = "insert into student (student_name, student_number) values ('John Doe', '1234567890')";
            command.ExecuteNonQuery();

            command.CommandText = "insert into student (student_name, student_number) values ('Jane Doe', '0987654321')";
            command.ExecuteNonQuery();

            transaction.Commit();
            Console.WriteLine("Records inserted successfully.");
        }
        catch (Exception)
        {
            transaction.Rollback();
            Console.WriteLine("Transaction rolled back.");
        }

        connection.Close();
    }
}
