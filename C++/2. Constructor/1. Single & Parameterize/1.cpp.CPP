#include<iostream.h>
#include<conio.h>
/*
	Constructor
	-> A special method that was invoke automatically
	   when object creation

	* syntex
	class name
	{
		access_modifier:
		class_name ( arg )
		{
			// statement
		}
	};

	* Rules
	-> function name same as class name
	-> no return value, no return type

	* Types of constructor
	-> Single | default constructor
	-> parameterize constructor
	-> copy constructor
*/
class Demo
{
	public:
	int a;
	Demo() //default cons.
	{
		cout<<"enter a = ";
		cin>>a;
	}
	Demo (int z) //parameterize cons.
	{
		cout<<"Demo::int z = "<<z<<endl;
	}
	Demo(char c)
	{
		cout<<"Demo::char c = "<<c<<endl;
	}
	Demo(float f)
	{
		cout<<"Demo::float f = "<<f<<endl;
	}
	void print()
	{
		cout<<"a = "<<a<<endl;
	}
};
void main()
{
	clrscr();

	Demo d((float)10.8);
	d.print();

	getch();
}