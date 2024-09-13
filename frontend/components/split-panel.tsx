import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface SplitPanelProps {
  children: React.ReactNode
}

export function SplitPanel({ children }: SplitPanelProps) {
  return (
    <div className="w-full h-full">
      {/* Tabs for medium and below */}
      <div className="lg:hidden">
        <Tabs defaultValue="tab1" className="w-full h-full flex flex-col">
          <TabsList className="mb-4">
            <TabsTrigger value="tab1">Chat</TabsTrigger>
            <TabsTrigger value="tab2">Learn</TabsTrigger>
          </TabsList>
          <div className="flex-grow overflow-auto">
            <TabsContent value="tab1" className="h-full flex flex-col gap-4">
              <div>Chat</div>
              <div>{children}</div>
            </TabsContent>
            <TabsContent value="tab2" className="h-full">
              Secondary Panel Content
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Side-by-side panels for large and above */}
      <div className="hidden lg:flex w-full h-full">
        <div className="w-1/2 p-4 overflow-auto">
          {children}
        </div>
        <div className="w-1/2 p-4 border-l overflow-auto">
        Learn
        </div>
      </div>
    </div>
  )
}