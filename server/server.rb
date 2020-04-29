require 'sinatra'
set :port, 8000

set :public_folder,  '../dist'



get '/' do
    #folderDir = '../dist'  # ng build output folder
    #send_file File.join(folderDir, 'index.html')
    send_file File.join(settings.public_folder, 'index.html')
end
