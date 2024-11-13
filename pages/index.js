import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  const [mode, setMode] = useState('select')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [answerProvider, setAnswerProvider] = useState('')
  const [department, setDepartment] = useState('')
  const [owner, setOwner] = useState('')
  const [searchResult, setSearchResult] = useState(null)

  const handleAskQuestion = (e) => {
    e.preventDefault()
    setSearchResult({
      answer: "This is a sample answer provided by the AI assistant.",
      department: 'AI Generated',
      owner: 'LLM',
      answerProvider: 'AI Assistant'
    })
  }

  const handleProvideAnswer = (e) => {
    e.preventDefault()
    setMode('select')
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-black border-white">
        <CardHeader className="space-y-4">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1500 1500"
              width="80"
              height="80"
              className="rounded-full transition-transform duration-300 hover:scale-110"
            >
              <g transform="matrix(12.39,0,0,12.39,750,750)" fill="#fff">
                <path d="M-32.019-49.293l-4.759 14.698h54.291l-4.769-14.698h-44.763z"/>
                <path d="M32.041-49.353H16.593L33.401 2.299l12.488-9.089-13.838-42.563h-.01z"/>
                <path d="M3.129 28.85l12.508 9.069 36.185-26.316-4.79-14.697L3.139 28.84l-.01.01z"/>
                <path d="M-36.184 23.011v.02L.03 49.297l12.488-9.089-43.923-31.894-4.779 14.697z"/>
                <path d="M-37.968-30.936L-51.775 11.627l12.508 9.069 16.747-51.642h-15.448v-.01z"/>
                <path d="M-18.651-30.956l-4.779 14.698h27.605l-4.779-14.698h-18.057l.01z"/>
                <path d="M3.246-30.976l8.558 26.246 12.488-9.089-5.579-17.157H3.246z"/>
                <path d="M3.166 6.108l12.508 9.058 14.597-10.598v-.02l-4.789-14.697L3.166 6.108z"/>
                <path d="M-14.608 15.972L.01 26.591l12.488-9.089-22.356-16.197-4.75 14.667z"/>
                <path d="M-24.62-12.589l-5.569 17.177 12.508 9.069 8.509-26.246h-15.448z"/>
              </g>
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold text-center">ARKM KNIGHT WATCH</CardTitle>
          <CardDescription className="text-center text-white">ARKM KNIGHT WATCH</CardDescription>
        </CardHeader>
        <CardContent>
          {mode === 'select' && (
            <div className="flex flex-col space-y-4">
              <Button onClick={() => setMode('ask')} className="w-full bg-white text-black hover:bg-white hover:text-black hover:font-bold transition-all">
                Ask a Question
              </Button>
              <Button onClick={() => setMode('provide')} className="w-full bg-white text-black hover:bg-white hover:text-black hover:font-bold transition-all">
                Provide an Answer
              </Button>
            </div>
          )}

          {mode === 'ask' && (
            <form onSubmit={handleAskQuestion} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="bg-white border-white text-black placeholder-gray-500 hover:font-bold transition-all"
              />
              <div className="flex space-x-2">
                <Button type="submit" className="flex-1 bg-white text-black hover:bg-white hover:font-bold transition-all">
                  Ask
                </Button>
                <Button onClick={() => setMode('select')} className="flex-1 bg-white text-black hover:bg-white hover:font-bold transition-all">
                  Back
                </Button>
              </div>
              {searchResult && (
                <Card className="mt-4 bg-black border-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Answer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-white">{searchResult.answer}</p>
                    <p className="text-sm text-white">Department: {searchResult.department}</p>
                    <p className="text-sm text-white">Owner: {searchResult.owner}</p>
                    <p className="text-sm text-white">Answered by: {searchResult.answerProvider}</p>
                  </CardContent>
                </Card>
              )}
            </form>
          )}

          {mode === 'provide' && (
            <form onSubmit={handleProvideAnswer} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter the question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="bg-white border-white text-black placeholder-gray-500 hover:font-bold transition-all"
              />
              <Textarea
                placeholder="Provide the answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="bg-white border-white text-black placeholder-gray-500 hover:font-bold transition-all"
              />
              <Input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="bg-white border-white text-black placeholder-gray-500 hover:font-bold transition-all"
              />
              <Input
                type="text"
                placeholder="Department owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="bg-white border-white text-black placeholder-gray-500 hover:font-bold transition-all"
              />
              <Input
                type="text"
                placeholder="Your name (Answer Provider)"
                value={answerProvider}
                onChange={(e) => setAnswerProvider(e.target.value)}
                className="bg-white border-white text-black placeholder-gray-500 hover:font-bold transition-all"
              />
              <div className="flex space-x-2">
                <Button type="submit" className="flex-1 bg-white text-black hover:bg-white hover:font-bold transition-all">
                  Submit
                </Button>
                <Button onClick={() => setMode('select')} className="flex-1 bg-white text-black hover:bg-white hover:font-bold transition-all">
                  Back
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
