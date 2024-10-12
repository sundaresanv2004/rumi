"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mic, Video, UserPlus, MonitorUp, X, Search, MoreVertical, MessageSquare, Camera, Maximize2 } from "lucide-react"
import { useToast } from "@/components/ui/toast"

export default function VideoConference() {
  const [messages, setMessages] = useState([
    { sender: "Alice", message: "Hey team, how's the project coming along?" },
    { sender: "Bob", message: "Making good progress! I've just finished the design mockups." },
    { sender: "Charlie", message: "Great! I'm working on the backend API. Should be done by tomorrow." },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoStopped, setIsVideoStopped] = useState(true)
  const [isSharing, setIsSharing] = useState(false)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (stream && videoRef.current && !isVideoStopped) {
      videoRef.current.srcObject = stream
    }
  }, [stream, isVideoStopped])

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", message: newMessage.trim() }])
      setNewMessage("")
    }
  }

  const toggleMute = () => {
    if (stream) {
      const audioTracks = stream.getAudioTracks()
      audioTracks.forEach(track => {
        track.enabled = isMuted
      })
      setIsMuted(!isMuted)
    } else {
      toast({
        title: "No active stream",
        description: "Please start your video first to toggle audio.",
        variant: "destructive",
      })
    }
  }

  const toggleVideo = async () => {
    if (isVideoStopped) {
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        setStream(newStream)
        setIsVideoStopped(false)
        setIsMuted(false)
        toast({
          title: "Camera and microphone access granted",
          description: "You can now use video and audio in the conference.",
        })
      } catch (err) {
        console.error("Error accessing media devices:", err)
        toast({
          title: "Permission denied",
          description: "Please allow access to your camera and microphone to use video conferencing.",
          variant: "destructive",
        })
      }
    } else {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
      setStream(null)
      setIsVideoStopped(true)
      setIsMuted(true)
    }
  }

  const toggleSharing = () => {
    setIsSharing(!isSharing)
    toast({
      title: isSharing ? "Screen sharing stopped" : "Screen sharing started",
      description: isSharing ? "You've stopped sharing your screen." : "You're now sharing your screen with others.",
    })
  }

  const invite = () => {
    toast({
      title: "Invite sent",
      description: "An invitation has been sent to join the video conference.",
    })
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="flex-1 flex flex-col">
        <div className="relative flex-1 bg-gray-800 m-4 rounded-lg">
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            LIVE
          </div>
          {!isVideoStopped && (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted={isMuted}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
          {isVideoStopped && (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400">Video is currently stopped</p>
            </div>
          )}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-gray-900 bg-opacity-50 p-2 rounded-full">
            <Button variant="ghost" size="icon" className="text-white">
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <Camera className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white" onClick={toggleMute}>
              <Mic className={`h-4 w-4 ${isMuted ? 'text-red-500' : 'text-white'}`} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white" onClick={toggleVideo}>
              <Video className={`h-4 w-4 ${isVideoStopped ? 'text-red-500' : 'text-white'}`} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex space-x-2 p-4">
          <Button 
            variant="default" 
            className={`flex-1 ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-gray-100'}`}
            onClick={toggleMute}
          >
            <Mic className={`h-4 w-4 mr-2 ${isMuted ? 'text-white' : 'text-gray-900'}`} />
            <span className={isMuted ? 'text-white' : 'text-gray-900'}>
              {isMuted ? 'Unmute' : 'Mute'}
            </span>
          </Button>
          <Button 
            variant="default" 
            className={`flex-1 ${isVideoStopped ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-gray-100'}`}
            onClick={toggleVideo}
          >
            <Video className={`h-4 w-4 mr-2 ${isVideoStopped ? 'text-white' : 'text-gray-900'}`} />
            <span className={isVideoStopped ? 'text-white' : 'text-gray-900'}>
              {isVideoStopped ? 'Start Video' : 'Stop Video'}
            </span>
          </Button>
          <Button 
            variant="default" 
            className="flex-1 bg-white hover:bg-gray-100"
            onClick={invite}
          >
            <UserPlus className="h-4 w-4 mr-2 text-gray-900" />
            <span className="text-gray-900">Invite</span>
          </Button>
          <Button 
            variant="default" 
            className={`flex-1 ${isSharing ? 'bg-green-500 hover:bg-green-600' : 'bg-white hover:bg-gray-100'}`}
            onClick={toggleSharing}
          >
            <MonitorUp className={`h-4 w-4 mr-2 ${isSharing ? 'text-white' : 'text-gray-900'}`} />
            <span className={isSharing ? 'text-white' : 'text-gray-900'}>
              {isSharing ? 'Stop Sharing' : 'Share Screen'}
            </span>
          </Button>
        </div>
      </div>
      <div className="w-80 flex flex-col border-l border-gray-700">
        <Card className="flex-1 rounded-none bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">People</CardTitle>
            <X className="h-4 w-4 cursor-pointer" />
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full justify-start mb-4">
              <UserPlus className="mr-2 h-4 w-4" />
              Add people
            </Button>
            <div className="relative mb-4">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search for people" className="pl-8 bg-gray-700 border-gray-600" />
            </div>
            <div className="text-xs font-medium text-gray-400 mb-2">IN MEETING</div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-600 mr-2" />
                <span className="text-sm">Teju Karthik (You)</span>
              </div>
              <MoreVertical className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 rounded-none bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Team Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-500px)]">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index}>
                    <p className="font-medium">{msg.sender}:</p>
                    <p className="text-sm text-gray-400">{msg.message}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-4 flex">
              <Input
                placeholder="Type a message..."
                className="flex-1 mr-2 bg-gray-700 border-gray-600"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button onClick={sendMessage} className="bg-green-500 hover:bg-green-600">Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}