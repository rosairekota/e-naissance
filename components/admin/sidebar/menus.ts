import BirthRecordIcon from "@/components/icons/BirthRecordIcon";
import DashboardIcon from "@/components/icons/DashboardIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import UserIcon from "@/components/icons/UserIcon";
import { IMenu } from "@/types/menu";


export const menus :IMenu[]=[
    {
        name:'Dashboard',
        path:'/admin',
        icon:  DashboardIcon
    },
    {
        name:'Certificat de Naissances',
        path:'/admin/birth-certificate',
        icon:BirthRecordIcon
    },
    {
        name:'Acte de Naissances',
        path:'/admin/birth-record',
        icon:BirthRecordIcon
    },
    {
        name:'Utilisateur',
        path:"/admin/users",
        icon: UserIcon
    },
    {
        name:'Paramètres',
        path:'/admin/settings',
        icon:SettingsIcon
    }
]