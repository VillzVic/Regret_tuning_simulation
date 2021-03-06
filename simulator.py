from regret_tuning import RegretTuning

r = RegretTuning(datafile='./satunsat_runtime.csv', request_time_slot=600, conf_per_slot=100)
regret_period = 600*72
n = 2
gplot_file_means = './satunsat_means.dat'
gplot_file_max = './satunsat_max.dat'


r.shuffle_data()
 
u =  r.run_method('lex', regret_period)
v =  r.run_method('rand', regret_period)
w =  r.run_method('randsort', regret_period)
x =  r.run_method('randsortdesc', regret_period)

y =  r.run_method('randw', regret_period)
z =  r.run_method('randwnoh', regret_period)

size = regret_period
for i in range(1, n):
  r.shuffle_data()

  t_u = r.run_method('lex', regret_period)
  u = [u[j]+t_u[j] for j in range(0,size)]
  
  t_v =  r.run_method('rand', regret_period)
  v = [v[j]+t_v[j] for j in range(0,size)]

  t_w =  r.run_method('randsort', regret_period)
  w = [w[j]+t_w[j] for j in range(0,size)]

  t_x = r.run_method('randsortdesc', regret_period)
  x = [x[j]+t_x[j] for j in range(0,size)]

  t_y =  r.run_method('randw', regret_period)
  y = [y[j]+t_y[j] for j in range(0,size)]

  t_z =  r.run_method('randwnoh', regret_period)
  z = [z[j]+t_z[j] for j in range(0,size)]  



u = [u[j]/n for j in range(0,size)]
v = [v[j]/n for j in range(0,size)]
w = [w[j]/n for j in range(0,size)]
x = [x[j]/n for j in range(0,size)]
y = [y[j]/n for j in range(0,size)]
z = [z[j]/n for j in range(0,size)]  


desc = open(gplot_file_means, 'w')  
desc.write('#t lex rand randsort randsortdesc randw randwnoh \n')
for i in range(0, size):
  desc.write(str(i)+' '+str(u[i])+' '+str(v[i])+' '+str(w[i])+' '+str(x[i])+' '+str(y[i])+' '+str(z[i])+'\n')

desc1 = open(gplot_file_max, 'w')  
desc1.write('# lex rand randsort randsortdesc randw randwnoh \n')
desc1.write(' '+str(max(u))+' '+str(max(v))+' '+str(max(w))+' '+str(max(x))+' '+str(max(y))+' '+str(max(z))+'\n')
  
 


