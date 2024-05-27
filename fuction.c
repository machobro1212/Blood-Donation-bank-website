#include<stdio.h>
char mystrcpy( char x[100] , char y[100])
{
    int i;
    for( i=0;y[i]!='\0';i++)
    {
        x[i]=y[i];
    }
    x[i]='\0';
    }

int main()
{
    char y[100],x[100];
    printf("\n enter any string :");
    scanf("%s",y);
    mystrcpy(x,y);

    printf("\n the copied string is : %s\n",x);

    return 0;

}