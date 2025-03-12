#include<iostream.h>
#include<conio.h>
/*
	structure
	-> collection of diff datatype
	function (UDF)

	# Class
	-> Collection of data and function
	-> syntex
		class name
		{
			access_modifier:
		};


	# Object
	-> Instance of class | Blueprint of class
	-> syntex
		class_name object_name;

	# Access Modifier
		1. public
		2. private
		3. protected

	# Object
	1. Single Object
	2. Multi Object
	3. Array Of Object
*/
class Demo
{
	public:
	int a; // data
	void test()
	{
		cout<<"Test function"<<endl;
		cout<<"Test:: a="<<a<<endl;
	}
	void input()
	{
		cout<<"enter value : ";
		cin>>a;
	}
};
void main()
{
	clrscr();
	Demo d,f; // class-object
	d.a = 30;
	cout<<"d.a = "<<d.a<<endl;
	d.test();

	f.a = 90;
	f.test();
	f.input();
	getch();
}