import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ikigakxtepyzubqpichx.supabase.co'
const supabaseKey = 'sb_publishable_LGV9w1_QVLOPIZPSa4OPkw_Ogemtrgc'

export const supabase = createClient(supabaseUrl, supabaseKey)
