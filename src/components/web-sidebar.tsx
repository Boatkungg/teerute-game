"use client";

import dynamic from "next/dynamic";
import { Calculator } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const SetAnswerDialog = dynamic(() => import("@/components/set-answer-dialog"), {
  ssr: false,
});

export default function WebSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SetAnswerDialog>
                  <SidebarMenuButton>
                    <Calculator />
                    <span>Set answer</span>
                  </SidebarMenuButton>
                </SetAnswerDialog>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
