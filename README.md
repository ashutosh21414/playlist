
# To run the code please follow the following steps.
1. git clone https://github.com/ashutosh21414/playlist.git
2. npm i
3. node index.js

# Use Postman or any similar app to check the api endpoints.

# Routes that can be used (IDs are attached with some APIs , Replace them as you wish to):

1. Save Videos ---- http://localhost:8000/api/saveVideos   (POST method)
2. Fetch Video ---- http://localhost:8000/api/fetchVideo/5c68353c74e3bc6e80a60966 (GET method)  
3. Delete Video ---- http://localhost:8000/api/deleteVideo/5c68324d6eed756c893902e6 (DELETE method)    

4. Save Playlist ---- http://localhost:8000/api/savePlaylist  (POST method)   
5. Fetch Playlist ---- http://localhost:8000/api/fetchPlaylist/5c6841004e358276f963d2e9  (GET method)     
6. Delete Playlist ---- http://localhost:8000/api/deletePlaylist/5c683b9955c80073ba16d20c  (DELETE method)  
7. Shuffle Playlist ---- http://localhost:8000/api/shufflePlaylist/5c6841004e358276f963d2e9   (POST method) 


# Please find the schema of videos and playlist in folder models/  


# Sample JSON to test saving feature for videos ::
{
	"video":{
    "title":"Cities at Sea: How Aircraft Carriers Work",
	"videoUrl":"https://www.youtube.com/watch?v=c0pS3Zx7Fc8",
	"thumbnailUrl":"https://i.ytimg.com/vi/c0pS3Zx7Fc8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLC9ad_NGx7hxAOw374HVnhg3MrRnw",
	"duration":"614"
	}
}



# Sample JSON to test saving feature for playlist ::
{
"playlist":{
	"title":"All Videos",
	"websiteUrl":"https://tralks.com",
	"videos":["5c6836849b19486f78e2374f","5c683b7855c80073ba16d20b","5c6840c54e358276f963d2e8","5c68353c74e3bc6e80a60966"]
           }
}

