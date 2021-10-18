## Part 2

1. line 12 will output 3, which is the current value of the var i, after the for loop finishes
2. line 13 will output 150, which is the curret value of the var discoutnedPrice, calculated by 300 * 0.5
3. line 14 will output 150, which is the current value of the var finalPrice, calculated by math.round(15000)/100
4. the function will return [50, 100, 150], which is the array of final prices defined by the discounted array variable
5. at line 12 there will be an error that i is not defined, since the let variable i is being called outside its block scope
6. at line 13 there will be an error that discountedPrice is not defined, since it is a let varibale being called outside its block scope
7. line 14 will output 150, since it is the value of the let variable finalPrice and we are inside its block scope
8. the function will return [50, 100, 150], which is the array of final prices defined by the discounted array variable
9. at line 11 there will be an error that i is not defined, since i is a let variable being aclled outside its scope
10. line 12 will output 3 since it is the constant variable length = 3, and we are in its scope
11. the function will return [50, 100, 150], which is the array of discounted prices defined by the const discounted array variable; we are in its scope and the values of the const array can be changed, or added.
12. Given the object write the notation for:
    a. student.name;
    b. student["Grad Year"];
    c. student.greeting();
    d. student["Favorite Teacher"].name
    e. student.courseLoad[0]
13. For each givee the output and why.
    a. '3' + 2 = 32, integers map to string exact 
    b. '3' - 2 = 1, since subtraction means we must use integers, no strings
    c. 3 + null = 3, null evaluates to 0
    d. '3' + null = 3null, because null becomes the string "null"
    e. true + 3 = 4, true evaluates to the integer 1
    f. false + null = 0, in arithmetic it evaluates to 0 + 0
    g = '3' + undefined = 3undefined, because undefined evaluates to the string "undefined"
    h. '3' - undefined = NaN, since undefined evaluates to NaN and can't be numerically computed
14. Comparison
    a. '2' > 1 = true, since '2' evaluates to 2
    b. '2' < '12' = false, since we compare 2 strings and in ascii 2 > 1
    c. 2 == '2' = true, string '2' becomes 2
    d. 2 === '2' = false, this operand uses comparison with no type conversion, so the string and number are not equal
    e. true == 2 = false, because true evaluates to 1
    f. tue === Boolean(2) = true, since Boolean(2) evaluates to true before comparison
15. the == operator compares variables and runs automatic type conversion for different data types. However the === operator does not do this and comapres variables as they are. 
16. In .js file
17. This function will return the array [2, 4, 6], since the function iterates through the input array and doubles the values in the callback function and pushes them to the new array.
18. in .js file
19. The code outputs: 1 4 3 2