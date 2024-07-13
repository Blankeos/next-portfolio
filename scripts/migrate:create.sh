# Arg$1: The migrations dir.
if [ -z "$1" ]; then
 echo "Please specify the migrations folder in the first argument."
 exit 1
fi

# Arg$2: The migration name.
if [ -z "$2" ]; then
 echo "No migration name found. Please add a name."
 exit 1
fi


# ✨ The command to execute ✨
goose -dir $1 postgres "" create $2 sql