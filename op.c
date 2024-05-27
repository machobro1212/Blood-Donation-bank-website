#include<stdio.h>
#include<math.h>
int isprime(int n)
{
    for(int i=2;i<=sqrt(n);i++){
        if(n%i==0){
            return 0;
        }
    }
    return 1;
}
int main()
{
    int a,b,n;

    printf("\n enter any number a:");
    scanf("%d",&a);

    printf("\n enter any number b:");
    scanf("%d",&b);
    for(int i=a;i<b;i++)
    {
        printf("\t%d",isprime(i));
    }
}
