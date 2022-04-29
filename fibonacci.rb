def fibonacci(num)
  return num if (num < 2) 

  fibo_one, fibo_two = [0, 1]

  (num - 1).times do
    fibo_one, fibo_two = fibo_two, fibo_one + fibo_two
  end

  fibo_two
end


# pseudo-code
# input n
# if n=1, output=1
# if n=2, output=1
# if n>2 , sum of previous two values


if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
