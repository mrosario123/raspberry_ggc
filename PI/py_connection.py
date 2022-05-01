from pymongo import MongoClient
import gridfs

def mongo_conn():
	try:
		conn = MongoClient(host="mongodb+srv://matthew_pi:pi_project@cluster0.i7itx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" port=27017)
		print("MonoDB connected", conn)
		return conn.grid_file
		except Exception as ex:
		print("Error in mono connection:", ex)

#print(mongo_conn())
db = mongo_conn()
fs = gridfs.GridFS(db)
name = "test"
# data = db.fs.files.find_one({"title": name})
data = db.fs.files.length()
print(data)
my_id = data["selectedFile"]
outputdata = fs.get(my_id).read()
download_location = "/home/tbb2022/Documents/images" + name
output = open(download_location, "wb")
output.close()
print("download successful")